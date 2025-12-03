export const Roles = {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  VIEWER: 'VIEWER'
} as const

export type Roles = (typeof Roles)[keyof typeof Roles]
