'use client';

import { drukFont } from '@/src/fonts/fonts';
import { useFieldArray, useForm } from 'react-hook-form';
import { FaLongArrowAltRight, FaPlus } from 'react-icons/fa';
import * as Styled from './PercentageCalculator.styled';

type PercentageCalculatorProps = {
  isOpen: boolean;
  onCancel: () => void;
};

interface CalculatorForm {
  rm: number | null;
  percentages: { percentage: number | null }[];
}

const PercentageCalculator: React.FC<PercentageCalculatorProps> = ({
  isOpen,
  onCancel,
}) => {
  const { register, control, watch, reset } = useForm<CalculatorForm>({
    defaultValues: {
      rm: null,
      percentages: [{ percentage: null }],
    },
  });

  const watchedRM = watch('rm');

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'percentages',
  });

  const watchFieldArray = watch('percentages');
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  const checkNull = (n: number | null) => (n ? n : 0);

  return (
    <Styled.CalculatorModal
      open={isOpen}
      onCancel={onCancel}
      className={drukFont.className}
      footer={null}
      closeIcon={null}
      centered
    >
      <h1>CALCULATE PERCENTAGES</h1>
      <Styled.CalculatorForm>
        <Styled.RMWrapper>
          <label htmlFor="rm">RM:</label>
          <input type="number" {...register('rm')} />
          <span>kg</span>
        </Styled.RMWrapper>
        <Styled.PercentagesWrapper>
          {controlledFields.map(({ percentage, id }, index) => (
            <Styled.PercentageBlock key={id}>
              <label htmlFor={`percentages.${index}.percentage`}>@</label>
              <input
                type="number"
                {...register(`percentages.${index}.percentage`)}
              />
              <div className="arrow-wrapper">
                <FaLongArrowAltRight />
              </div>
              <p>{(checkNull(percentage) * checkNull(watchedRM)) / 100}kg</p>
              <button type="button" onClick={() => remove(index)}>
                X
              </button>
            </Styled.PercentageBlock>
          ))}
        </Styled.PercentagesWrapper>
        <Styled.FormButtonsWrapper>
          <button className="reset" type="button" onClick={() => reset()}>
            CLEAR
          </button>
          <button
            className="add"
            type="button"
            onClick={() => append({ percentage: null })}
          >
            <FaPlus />
          </button>
        </Styled.FormButtonsWrapper>
      </Styled.CalculatorForm>
    </Styled.CalculatorModal>
  );
};

export default PercentageCalculator;
