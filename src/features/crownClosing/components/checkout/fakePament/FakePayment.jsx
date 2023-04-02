import s from './fakePayment.module.scss'
import EMVChip from '../../../assets/EMVChip.svg'
import Meastro from '../../../assets/Meastro.svg'
import {useFetchUserQuery} from '../../../store/api/user.api'
import {faker} from '@faker-js/faker'
import {useNavigate} from 'react-router-dom'
import { CgSmartphoneChip } from 'react-icons/cg';

function FakePayment() {
  const navigate = useNavigate()
  const {data} = useFetchUserQuery()
  
  const handlePayment = () => {
    navigate('/crownClothing/order')
  }
  
  return (
    <div className={s.fakePayment}>
      <img className={s.img} src={faker.image.unsplash.nature(300,200)} alt="" />
      <div className={s.bgTon}></div>
      <CgSmartphoneChip className={s.chip}/>
      <img className={s.logo} src={Meastro} alt="" />
      
      <div className={s.fields}>
          <div className={s.bankNmae}>{faker.commerce.productName()+" Bank"}</div>
          <div className={s.fieldsContainer}>
            <div className={s.name}>
               <span className={s.fullName}>{data?.displayName}</span>
               <span className={s.expiration}>exp: 04/30</span>
            </div>
            <div className={s.cardNumber}>
              <span>1234 4567 8910 9876</span>
              <span>security code: 482</span>
            </div>
          </div>
      </div>
      <button className={`${s.btn} google`} onClick={handlePayment}>Order</button>
    </div>
  )
}

export default FakePayment