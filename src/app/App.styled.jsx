import styled from 'styled-components'

const AppStyled = styled.div`
  display: grid;
  grid-template-columns: 5% auto;

  .detail {
  }
}

@media screen and (max-width: 768px) {
  display: flex;
  flex-direction: column;
  width: 100vw;

  .detail {
    width: 100%;
  }

  //@media screen and (max-width: 768px) {
  //  //grid-template-columns: 1fr 10fr;
  //  overflow-x: auto;
  //  overflow-y: hidden;
  //  scroll-snap-coordinate: 0 0;
  //  scroll-snap-points-x: repeat(100%);
  //  scroll-snap-type: x mandatory;
  //  flex: 1;
  //  display: flex;
  //  -webkit-overflow-scrolling: touch;
  //
  //  &:nth-child(n) {
  //    width: 380px;
  //    height: 100%;
  //    flex: 0 0 380px;
  //    scroll-snap-align: start;
  //  }
  //
  //
  //  .detail {
  //  }
`

export default AppStyled