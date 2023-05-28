import { ThreeDots } from 'react-loader-spinner';

export const Loader = ({
  width = '100px',
  height = '100px',
  color = '#5d7dd6',
}) => {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius="9"
      color={color}
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      visible={true}
    />
  );
};
