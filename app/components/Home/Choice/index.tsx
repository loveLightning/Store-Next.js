import s from "./styled.module.sass";

import { ChoiceRange } from './ChoiceRange'
import ChoiceRate from './ChoiceRate'


const Choice = () => {
  
  return (
    <>
      <ChoiceRange />
      <div className={s.line}></div>
      <ChoiceRate />
    </>
  );
};

export default Choice;
