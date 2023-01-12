import * as ReactConfetti from 'react-confetti';

const Confetti = (props) => {
  const { size, showConfetti, setShowConfetti } = props;

  return (
    <>
      {showConfetti ? (
        <ReactConfetti
          width={size.width}
          height={size.height}
          numberOfPieces={200}
          recycle={false}
          onConfettiComplete={() => {
            setShowConfetti(false);
          }}
        />
      ) : null}
    </>
  );
};

export default Confetti;
