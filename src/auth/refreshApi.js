import {createRefresh} from 'react-auth-kit'

const refreshApi = createRefresh({
  interval: 10, // Refreshs the token in every 10 minutes
  refreshApiCallback: param => {  // API container function
    return {
      isSuccess: true,
    }
  }
})

export default refreshApi