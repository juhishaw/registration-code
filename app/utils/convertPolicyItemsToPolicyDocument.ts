import { PolicyAction, PolicyActionKind, PolicyDocument, PolicyItem, RuleSet } from './types'

const convertPolicyItemsToPolicyAction = (actionItem: PolicyItem, items: PolicyItem[]) : PolicyAction => {
  const action: PolicyAction = {
    action: actionItem.id.split('#')[0] as PolicyActionKind,
    ...(actionItem.parameters ? actionItem.parameters : {}),
  }

  return action
}

const convertPolicyItemsToRuleSet = (items: PolicyItem[]) : RuleSet => {
  const ruleSet: RuleSet = {}

  const andItem = items.find((item) => item.id.match(/^and#[^:]+$/))
  if (andItem) {
    ruleSet.and = convertPolicyItemsToRuleSet(
      items
        .filter((item) => item.id.startsWith(andItem.id + ':'))
        .reduce((all, cur) => {
          all.push({
            kind: cur.kind,
            id: cur.id.slice((andItem.id + ':').length),
            parameters: cur.parameters,
          })
          return all
        }, [] as PolicyItem[])
    )
  }

  const orItem = items.find((item) => item.id.match(/^or#[^:]+$/))
  if (orItem) {
    ruleSet.or = convertPolicyItemsToRuleSet(
      items
        .filter((item) => item.id.startsWith(orItem.id + ':'))
        .reduce((all, cur) => {
          all.push({
            kind: cur.kind,
            id: cur.id.slice((orItem.id + ':').length),
            parameters: cur.parameters,
          })
          return all
        }, [] as PolicyItem[])
    )
  }

  const notItem = items.find((item) => item.id.match(/^not#[^:]+$/))
  if (notItem) {
    ruleSet.not = convertPolicyItemsToRuleSet(
      items
        .filter((item) => item.id.startsWith(notItem.id + ':'))
        .reduce((all, cur) => {
          all.push({
            kind: cur.kind,
            id: cur.id.slice((notItem.id + ':').length),
            parameters: cur.parameters,
          })
          return all
        }, [] as PolicyItem[])
    )
  }

  const xorItem = items.find((item) => item.id.match(/^xor#[^:]+$/))
  if (xorItem) {
    ruleSet.xor = convertPolicyItemsToRuleSet(
      items
        .filter((item) => item.id.startsWith(xorItem.id + ':'))
        .reduce((all, cur) => {
          all.push({
            kind: cur.kind,
            id: cur.id.slice((xorItem.id + ':').length),
            parameters: cur.parameters,
          })
          return all
        }, [] as PolicyItem[])
    )
  }

  const rules = items
    .filter(
      (item) => (
        !item.id.startsWith('and#') &&
        !item.id.startsWith('or#') &&
        !item.id.startsWith('not#') &&
        !item.id.startsWith('xor#')
      )
    )
    .filter((item) => item.id.match(/^[^#]+#[^:]+$/))
  rules.forEach((rule) => {
    ruleSet[rule.id.split('#')[0]] = {parameters: rule.parameters} || {}
  })

  return ruleSet
}

export const convertPolicyItemsToPolicyDocument = (items: PolicyItem[]) : PolicyDocument => {
  let policyDocument : PolicyDocument = {
    action: undefined
  }

  const ifItem = items.find((item) => item.kind === 'if' && item.id.match(/^if#[^:]+$/))
  if (ifItem) {
    policyDocument.if = convertPolicyItemsToRuleSet(
      items
        .filter((item) => item.id.startsWith(ifItem.id + ':if:'))
        .reduce((all, cur) => {
          all.push({
            kind: cur.kind,
            id: cur.id.slice((ifItem.id + ':if:').length),
            parameters: cur.parameters,
          })
          return all
        }, [] as PolicyItem[])
    )
    policyDocument.then = convertPolicyItemsToPolicyDocument(
      items
        .filter((item) => item.id.startsWith(ifItem.id + ':then:'))
        .reduce((all, cur) => {
          all.push({
            kind: cur.kind,
            id: cur.id.slice((ifItem.id + ':then:').length),
            parameters: cur.parameters,
          })
          return all
        }, [] as PolicyItem[])
    )
    const elseItem = items.find((item) => item.kind === 'else' && item.id === ifItem.id + ':else')
    if (elseItem) {
      policyDocument.else = convertPolicyItemsToPolicyDocument(
        items
          .filter((item) => item.id.startsWith(elseItem.id + ':'))
          .reduce((all, cur) => {
            all.push({
              kind: cur.kind,
              id: cur.id.slice((elseItem.id + ':').length),
              parameters: cur.parameters,
            })
            return all
          }, [] as PolicyItem[])
      )
    }
  }

  const actionItem = items.find((item) => item.kind !== 'if' && !item.id.startsWith('if#'))
  if (actionItem) {
    const action = convertPolicyItemsToPolicyAction(
      actionItem,
      items
        .filter((item) => item.id.startsWith(actionItem.id))
        .reduce((all, cur) => {
          all.push({
            kind: cur.kind,
            id: cur.id.slice((actionItem.id + ':').length),
            parameters: cur.parameters,
          })
          return all
        }, [] as PolicyItem[])
    )
    policyDocument = {
      ...policyDocument,
      ...action,
    }
  }

  return policyDocument
}
