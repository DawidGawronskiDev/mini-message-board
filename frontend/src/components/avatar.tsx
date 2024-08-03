const generateNumber = () => {
  return Math.floor(Math.random() * 360);
};

const generateColor = (number: number) => {
  return `hsl(${number}deg,50%,50%)`;
};

const generageBackground = () => {
  const number = generateNumber();
  const colorOne = generateColor(number);
  const colorTwo = generateColor(number + 90);
  return `linear-gradient(to bottom right, ${colorOne}, ${colorTwo})`;
};

type AvatarProps = {
  className: string;
};

const Avatar = ({ className = "" }: AvatarProps) => {
  return (
    <div
      style={{
        background: generageBackground(),
      }}
      className={"w-10 aspect-square rounded-full " + className}
    ></div>
  );
};

export default Avatar;
