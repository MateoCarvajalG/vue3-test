import { shallowMount } from '@vue/test-utils'
import QRCodeInput from '@/components/QRCodeInput.vue'
import { createStore } from 'vuex'

describe('QRCodeInput.vue', () => {
  describe('mounting a component', () => {
    it('renders qr code input component', () => {
      const wrapper = shallowMount(QRCodeInput)
      const component = wrapper.find('.hello')

      expect(component.classes()).toContain('hello')
    })
  })


  describe('renders qr code input component with its dependencies',()=>{
    const store = createStore({
      state(){
        return {count:1}
      }
    })

    const  wrapper = shallowMount(QRCodeInput,
      {
        global:{
          plugin:[store]
        }
      }
    )

    it('renders generate qr code button with text',()=>{
      const component = wrapper.find('#btn-generate')
      expect(component.text()).toBe('Generar QR')
    })

    it('renders txt input, change its value and see if stored',()=>{
      const component = wrapper.find('#txt-qr-code')
      expect(component.element.value).toBe('')
      component.setValue('www.platzi.com')
      expect(wrapper.vm.QRCodeInput).toBe('www.platzi.com')
    })

  })
})
