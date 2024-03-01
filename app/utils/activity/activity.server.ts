import { fetchFromBackend } from '../backend/fetch.server'
import { EvaluatedTransferEvent, ListEventsInActivityLogResponse } from '../types'

export const getAllTransferActivity = async (token: string) : Promise<EvaluatedTransferEvent[]> => {
  const activity = await fetchFromBackend<ListEventsInActivityLogResponse>({
    path: 'api/v1/policy/event/transaction:transfer',
    method: 'GET',
    token,
  })
  if (activity.error) {
    return []
  }

  return activity.result.items as EvaluatedTransferEvent[]
}
