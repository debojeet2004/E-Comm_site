import {Container} from '../index'

function Footer() {
  return (
    <Container>
        <div className='p-8 flex justify-between items-center'>
            <div className='flex justify-between w-[60%]  '>
              <p>Policies: </p>
              <p>Returns Policy</p>
              <p>Terms of use</p>
              <p>Security</p>
              <p>Privacy</p>
              <p>Infringement</p>
              <p>© 20024-2024 Shopsi.com</p>
            </div>

            <div className='flex gap-3 justify-end w-max'>
              <p>Need help? Visit the</p>
              <p className='text-blue-400'>Help Center</p>
              <p>or</p>
              <p className='text-blue-400'>Contact Us</p>
            </div>
        </div>
    </Container>
  )
}

export default Footer