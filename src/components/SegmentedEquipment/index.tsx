import * as Styled from './SegmentedEquipment.styled';
import { BarbellSVG, KettlebellSVG, DumbbellSVG } from './EquipmentIcons';

const EQUIPMENT_OPTIONS = [
  {
    label: (
      <div className="barbell-wrapper">
        <BarbellSVG />
      </div>
    ),
    value: 'barbell',
  },
  {
    label: (
      <div className="db-kb-wrapper">
        <DumbbellSVG />
        {/* /
        <KettlebellSVG /> */}
      </div>
    ),
    value: 'no-barbell',
  },
];

type SegmentedEquipmentProps = object;

const SegmentedEquipment: React.FC<SegmentedEquipmentProps> = () => {
  return <Styled.SegmentedWrapper options={EQUIPMENT_OPTIONS} />;
};

export default SegmentedEquipment;
