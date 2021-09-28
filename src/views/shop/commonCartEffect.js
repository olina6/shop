// Two-way binding data from shopping cart and store content page when click + and -
import { useStore } from 'vuex'
export const useCommonCartEffect = () => {
  const store = useStore()
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, num })
  }
  return { changeCartItemInfo }
}
