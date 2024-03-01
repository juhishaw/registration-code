import { fetchFromBackend } from 'app/utils/backend/fetch.server'
import { AddAddressesToAllowDenyListRequest } from '../types'

export type Category = 'Fraud' | 'Phishing' | 'Laundering' | 'None'

type DenyAddressWithCategory = {
  address: string
  category: Category
}

type AllowDenyList = {
  allowList: string[]
  denyList: DenyAddressWithCategory[]
}

export const getAllowDenyList = async (token: string) => {
  const list = await fetchFromBackend<AllowDenyList>({
    path: `api/v1/account/config/addresses`,
    method: 'GET',
    token,
  })
  if (list.error) {
    return {
      allowList: [],
      denyList: [],
    }
  }

  return list.result
}

export const addToAllowDenyList = async (token: string, list: AddAddressesToAllowDenyListRequest) => {
  const response = await fetchFromBackend({
    path: `api/v1/account/config/addresses`,
    method: 'POST',
    token,
    body: JSON.stringify(list),
  })
  if (response.error) {
    return false
  }
  return true
}

