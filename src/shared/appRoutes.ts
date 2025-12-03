const Prefix = ''

export const AppRoutes = {
  ROOT: `${Prefix}/`,
  PERMISSION_DENIED: `${Prefix}/permission-denied`,
  FORBIDDEN_ACCESS: `${Prefix}/forbidden-access`,

  PUBLIC: {
    AUTH: {
      LOGIN: `${Prefix}/login`,
      REGISTER: `${Prefix}/auth/register`,
      FORGOT_PASSWORD: `${Prefix}/auth/forgot-password`,
      RESET_PASSWORD: `${Prefix}/auth/reset-password`
    },
    KY_VONG_GUI_DAI_HOI_DOAN_TINH_DOAN_HUNG_YEN: `${Prefix}/kyvongguidaihoitinhdoanhungyen`
  },

  PRIVATE: {
    TRANG_CHU: `${Prefix}/trang-chu`,
    STORY_BOOK: `${Prefix}/systems/story-book`
  }
}
