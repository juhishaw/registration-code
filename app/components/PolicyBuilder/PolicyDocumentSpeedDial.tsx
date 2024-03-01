import {
  PlusIcon,
  QuestionMarkCircleIcon,
  CogIcon,
  PlusCircleIcon,
  PauseCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline'

import { IconButton } from 'app/components/IconButton'
import { SpeedDial } from 'app/components/SpeedDial'
import { SpeedDialHandler } from 'app/components/SpeedDialHandler'
import { SpeedDialContent } from 'app/components/SpeedDialContent'
import { SpeedDialAction } from 'app/components/SpeedDialAction'
import { Typography } from 'app/components/Typography'

type PolicyButtonHandler = (value?: string) => void

interface PolicyButtonHandlers {
  if?: PolicyButtonHandler
  else?: PolicyButtonHandler
  action?: PolicyButtonHandler
  rules?: PolicyButtonHandler
  and?: PolicyButtonHandler
  or?: PolicyButtonHandler
  not?: PolicyButtonHandler
  xor?: PolicyButtonHandler
}
 
export function PolicyDocumentSpeedDial(props: PolicyButtonHandlers) {
  const onActionAllowClick = () => {
    if (props.action) {
      props.action('allow')
    }
  }
  const onActionDenyClick = () => {
    if (props.action) {
      props.action('deny')
    }
  }
  const onActionHoldClick = () => {
    if (props.action) {
      props.action('needsApproval')
    }
  }
  const onActionDoNothingClick = () => {
    if (props.action) {
      props.action('nothing')
    }
  }
  const onIfClick = () => {
    if (props.if) {
      props.if()
    }
  }
  const onElseClick = () => {
    if (props.else) {
      props.else()
    }
  }
  const onRuleAndClick = () => {
    if (props.and) {
      props.and()
    }
  }
  const onRuleOrClick = () => {
    if (props.or) {
      props.or()
    }
  }
  const onRuleNotClick = () => {
    if (props.not) {
      props.not()
    }
  }
  const onRuleXorClick = () => {
    if (props.xor) {
      props.xor()
    }
  }
  const onRuleDenyListClick = () => {
    if (props.rules) {
      props.rules('isSendingToAddressOnDenyList')
    }
  }
  const onRuleAllowListClick = () => {
    if (props.rules) {
      props.rules('isSendingToAddressOnAllowList')
    }
  }
  const onRuleSpendingLimitClick = () => {
    if (props.rules) {
      props.rules('isUserOverTheirSpendingLimit')
    }
  }

  const anyProps = (
    !!props.rules || !!props.action ||
    !!props.and || !!props.else ||
    !!props.if || !!props.not ||
    !!props.not || !!props.or ||
    !!props.xor
  )

  return (
    <div className="relative w-full">
      <div>
        <SpeedDial placement="bottom">
          {anyProps &&
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full bg-black h-16 w-16">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          }
          <SpeedDialContent className="flex-row">
            {props.if &&
            <SpeedDialAction className="h-16 w-16" onClick={onIfClick}>
              <QuestionMarkCircleIcon className="h-5 w-5" />
              <Typography className="text-slate text-xs font-normal">
                if-then
              </Typography>
            </SpeedDialAction>
            }
            {props.else &&
            <SpeedDialAction className="h-16 w-16" onClick={onElseClick}>
              <QuestionMarkCircleIcon className="h-5 w-5" />
              <Typography className="text-slate text-xs font-normal">
                else
              </Typography>
            </SpeedDialAction>
            }
            {props.action &&
              <SpeedDialAction className="h-16 w-16" onClick={onActionAllowClick}>
                <PlusCircleIcon className="h-5 w-5" />
                <Typography className="text-slate text-xs font-normal">
                  allow
                </Typography>
              </SpeedDialAction>
            }
            {props.action &&
              <SpeedDialAction className="h-16 w-16" onClick={onActionDenyClick}>
                <XCircleIcon className="h-5 w-5" />
                <Typography className="text-slate text-xs font-normal">
                  deny
                </Typography>
              </SpeedDialAction>
            }
            {props.action &&
              <SpeedDialAction className="h-16 w-16" onClick={onActionHoldClick}>
                <PauseCircleIcon className="h-5 w-5" />
                <Typography className="text-slate text-xs font-normal">
                  hold
                </Typography>
              </SpeedDialAction>
            }
            {props.action &&
              <SpeedDialAction className="h-16 w-16" onClick={onActionDoNothingClick}>
                <CogIcon className="h-5 w-5" />
                <Typography className="text-slate text-xs font-normal">
                  no action
                </Typography>
              </SpeedDialAction>
            }
            {props.and &&
              <SpeedDialAction className="h-16 w-16" onClick={onRuleAndClick}>
                <CogIcon className="h-5 w-5" />
                <Typography className="text-slate text-xs font-normal">
                  all
                </Typography>
              </SpeedDialAction>
            }
            {props.or &&
              <SpeedDialAction className="h-16 w-16" onClick={onRuleOrClick}>
                <CogIcon className="h-5 w-5" />
                <Typography className="text-slate text-xs font-normal">
                  any one
                </Typography>
              </SpeedDialAction>
            }
            {props.not &&
              <SpeedDialAction className="h-16 w-16" onClick={onRuleNotClick}>
                <CogIcon className="h-5 w-5" />
                <Typography className="text-slate text-xs font-normal">
                  none
                </Typography>
              </SpeedDialAction>
            }
            {props.xor &&
              <SpeedDialAction className="h-16 w-16" onClick={onRuleXorClick}>
                <CogIcon className="h-5 w-5" />
                <Typography className="text-slate text-xs font-normal">
                  only one
                </Typography>
              </SpeedDialAction>
            }
            {props.rules &&
              <SpeedDialAction className="h-16 w-16" onClick={onRuleAllowListClick}>
                <CogIcon className="h-5 w-5" />
                <Typography className="text-slate text-xs font-normal">
                  allowlist
                </Typography>
              </SpeedDialAction>
            }
            {props.rules &&
              <SpeedDialAction className="h-16 w-16" onClick={onRuleDenyListClick}>
                <CogIcon className="h-5 w-5" />
                <Typography className="text-slate text-xs font-normal">
                  denylist
                </Typography>
              </SpeedDialAction>
            }
            {props.rules &&
              <SpeedDialAction className="h-16 w-16" onClick={onRuleSpendingLimitClick}>
                <CogIcon className="h-5 w-5" />
                <Typography className="text-slate text-xs font-normal">
                  limit
                </Typography>
              </SpeedDialAction>
            }
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  )
}
