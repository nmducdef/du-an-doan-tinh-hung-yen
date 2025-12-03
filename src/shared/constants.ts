import { Roles } from '@/shared/permissions'

export const Constants = {
  API_TOKEN_STORAGE: 'API_APP_AT_LABLINK',
  TAB_STORAGE: 'TAB_LABLINK',
  MODE2_RESULT_KSK_NGOAI_VIEN: 'MODE_2_RESULT_KSK_NGOAI_VIEN',
  API_ROLE: 'API_APP_ROLE',
  ROLES: [
    {
      label: 'Admin',
      value: Roles.ADMIN
    },
    {
      label: 'Manager',
      value: Roles.MANAGER
    },
    {
      label: 'Viewer',
      value: Roles.VIEWER
    }
  ]
}
