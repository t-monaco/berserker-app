import styled from 'styled-components';

type LoaderProps = object;

const Loader: React.FC<LoaderProps> = () => {
  return <CSSLoader />;
};

export default Loader;

const CSSLoader = styled.div`
  width: 85px;
  height: 50px;
  --g1: conic-gradient(
    from 90deg at left 3px top 3px,
    #0000 90deg,
    var(--primary-color) 0
  );
  --g2: conic-gradient(
    from -90deg at bottom 3px right 3px,
    #0000 90deg,
    var(--primary-color) 0
  );
  background: var(--g1), var(--g1), var(--g1), var(--g2), var(--g2), var(--g2);
  background-position: left, center, right;
  background-repeat: no-repeat;
  animation: l9 1s infinite;

  @keyframes l9 {
    0% {
      background-size:
        25px 50%,
        25px 50%,
        25px 50%;
    }
    25% {
      background-size:
        25px 100%,
        25px 50%,
        25px 50%;
    }
    50% {
      background-size:
        25px 50%,
        25px 100%,
        25px 50%;
    }
    75% {
      background-size:
        25px 50%,
        25px 50%,
        25px 100%;
    }
    100% {
      background-size:
        25px 50%,
        25px 50%,
        25px 50%;
    }
  }
`;
