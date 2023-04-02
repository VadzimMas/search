import s from './fakePayment.module.scss'
import EMVChip from '../../../assets/EMVChip.svg'
import Meastro from '../../../assets/Meastro.svg'
import {useFetchUserQuery} from '../../../store/api/user.api'
import {faker} from '@faker-js/faker'


function FakePayment() {
  
  const {data} = useFetchUserQuery()
  
  return (
    <div className={s.fakePayment}>
      <img src={faker.image.unsplash.nature()} alt="" />
      <img className={s.chip} src={EMVChip} alt="" />
      <img className={s.logo} src={Meastro} alt="" />
      
      <div className={s.fullName}></div>
      <div className={s.fields}>
        <div>
          <span className={s.fullName}>{data?.displayName}</span>
          <span className={s.expiration}>04/30</span>
        </div>
        <div>1234 4567 8910 9876</div>
      </div>
    </div>
  )
}

export default FakePayment