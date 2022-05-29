import React from "react";
import s from "./index.module.sass";
import { getValueInput } from '../../../../store/choiceRate/choiceRate'
import { useDispatch } from "react-redux";

const ChoiceRate: React.FC = () => {

  const dispath = useDispatch()
  const changedValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispath(getValueInput(e.target.value))
  }

  return (
    <div className={s.wrapper}>
      <div className={s.title}>Rate</div>
      <div className={s.rate}>
        <label className={s.label}>
          <input onChange={changedValue} className={s.input} name='rate' type="radio" value="2" defaultChecked />
          <span className={s.btn}>
            <span className={s.inner}>2+</span>
          </span>
        </label>
        <label className={s.label}>
          <input onChange={changedValue} className={s.input} name='rate' type="radio" value="3" />
          <span className={s.btn}>
            <span className={s.inner}>3+</span>
          </span>
        </label>
        <label className={s.label}>
          <input onChange={changedValue} className={s.input} name='rate' type="radio" value="4" />
          <span className={s.btn}>
            <span className={s.inner}>4+</span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default ChoiceRate;
