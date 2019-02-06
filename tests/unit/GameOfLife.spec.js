import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import GameOfLife from '@/components/GameOfLife.vue'

describe('GameOfLife.vue', () => {

    //
    it('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(GameOfLife, {
            propsData: { msg }
        })
        
        expect(wrapper.text()).to.include(msg)
    })

    //Blank test
    it('', () => {

    })
})
