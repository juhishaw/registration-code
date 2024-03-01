import { ActionFunctionArgs, json, redirect, type LoaderFunctionArgs, type MetaFunction } from '@remix-run/cloudflare'
import { useState } from 'react'

import { Container } from 'app/components/Container'
import PolicyBuilder from 'app/components/builder/PolicyBuilder'
import PolicyTemplatePicker from 'app/components/PolicyBuilder/PolicyTemplatePicker'
import Stepper from 'app/components/Stepper'
import { Parameters, PolicyDocument, PolicyItem } from 'app/utils/types'
import SavePolicyForm from 'app/components/PolicyBuilder/SavePolicyForm'
import { useActionData, useLoaderData, useNavigate, useSubmit } from '@remix-run/react'
import { convertPolicyItemsToPolicyDocument } from 'app/utils/convertPolicyItemsToPolicyDocument'
import { requireUser } from 'app/utils/authentication/session.server'
import { configurePolicy, createPolicy } from 'app/utils/policies/policies.server'

export const meta: MetaFunction = () => {
  return [
    { title: "Web3Firewall - New Policy" },
  ]
}

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const user = await requireUser(request, context)
  if (user.userId.startsWith('ac-web3-trust:')) {
    return json({
      users: [
        'ac-web3-trust:users:cody+test3@web3firewall.xyz',
        'ac-web3-trust:users:matt@web3firewall.xyz',
        'ac-web3-trust:users:gavin@web3firewall.xyz',
        'ac-web3-trust:users:nizar@web3firewall.xyz',
        'ac-web3-trust:users:samer@web3firewall.xyz'
      ],
    })
  }

  return json({users:[]})
}

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const user = await requireUser(request, context)

  const formData = await request.formData()
  const name = formData.get('name')?.toString() || ''
  const version = formData.get('version')?.toString() || ''
  const description = formData.get('description')?.toString() || ''
  const document: PolicyDocument = JSON.parse(formData.get('document')?.toString() || '{}')
  const autoConfig = formData.get('autoConfig')?.toString() === 'true'
  const priority = Number(formData.get('priority')?.toString() || '1')

  if (await createPolicy(user.token, {name, version, description, document})) {
    if (!autoConfig || await configurePolicy(user.token,{name, version, priority})) {
      return redirect('/policy/list')
    }
    return json({errors:{priority: `Priority already in use (${priority})`}})
  }
  return json({errors:{name: `Policy name already in use (${name})`}})
}

export default function PolicyBuilderPage() {
  const [items, setItems] = useState([] as PolicyItem[])
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [autoConfig, setAutoConfig] = useState(true)
  const [priority, setPriority] = useState(1)
  const [description, setDescription] = useState('')
  const [version, setVersion] = useState('1.0.0')
  const navigate = useNavigate()
  const submit = useSubmit()
  const data = useActionData<typeof action>()
  const users: {users:string[]} = useLoaderData<typeof loader>()

  const addItem = (newItem: PolicyItem | PolicyItem[]) => {
    if (Array.isArray(newItem)) {
      setItems([...items, ...newItem])
    } else {
      setItems([...items, newItem])
    }
  }

  const onRemove = (id: string) => {
    setItems(items.filter((item) => !item.id.startsWith(id)))
  }

  const onTemplatePickerSubmit = (template?: PolicyItem[]) => {
    if (template) {
      setItems(template)
    }
    setStep(1)
  }

  const onUpdateParameters = (id: string, parameters: Parameters) => {
    const item = items.find((item) => item.id === id)
    if (item) {
      item.parameters = parameters
    }
  }

  const onSave = () => {
    if (items.length === 0) {
      return
    }
    const formData = {
      document: JSON.stringify(convertPolicyItemsToPolicyDocument(items)),
      name,
      description,
      version,
      autoConfig,
      priority,
    }
    submit(formData, {method: 'post'})
  }

  const onCancel = () => {
    if (items.length > 0) {
      // TODO: add an are you sure message
    }
    navigate(-1)
  }

  const steps = [{
    id: 'Step 1',
    name: 'Select a Template',
  },{
    id: 'Step 2',
    name: 'Define the Policy',
  },{
    id: 'Step 3',
    name: 'Save the Policy',
  }]

  return (
    <div className="mx-auto max-w-full text-center place-items-center content-center place-self-center">
      <div className="mx-auto pb-5 text-end max-w-lg">
        <button type="button" onClick={onCancel}>X</button>
      </div>
      <div>
        <div className="mx-auto max-w-lg pb-10 text-center">
          <Stepper
            steps={steps}
            onClick={(newStep: number) => setStep(newStep)}
            currentStep={step}
          />
        </div>
        { step === 0 ?
          <div className="mx-auto max-w-lg pb-10">
            <PolicyTemplatePicker onSubmit={onTemplatePickerSubmit} users={users.users} />
          </div>
        : step === 1 ?
          <div className="mx-auto pb-10">
            <PolicyBuilder
              items={items}
              addItem={addItem}
              onRemove={onRemove}
              onBack={() => setStep(step-1)}
              onForward={() => setStep(step+1)}
              onUpdate={onUpdateParameters}
            />
          </div>
        :
          <div className="mx-auto max-w-lg">
            <SavePolicyForm
              policyName={name}
              setPolicyName={setName}
              policyDescription={description}
              setPolicyDescription={setDescription}
              policyVersion={version}
              setPolicyVersion={setVersion}
              onSave={onSave}
              onBack={() => setStep(step-1)}
              errors={data?.errors}
              autoConfig={autoConfig}
              setAutoConfig={setAutoConfig}
              priority={priority}
              setPriority={setPriority}
            />
          </div>
        }
      </div>
    </div>
  )
}
