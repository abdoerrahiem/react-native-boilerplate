import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

export const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}

export const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack()
  }
}

export const currentRoute = () => {
  return navigationRef.getCurrentRoute()
}

export const replace = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      StackActions.replace(name, {
        params,
      }),
    )
  }
}
