import { LuSparkle } from "react-icons/lu";

interface BulletPointProps {
  children: React.ReactNode;
  props?: string;
}

const BulletPoint = ({ children, props }: BulletPointProps) => {
  return (
    <div
      className={`${props} px-8 py-6 my-4 max-w-[20rem] bg-backwhite z-20 rounded-xl bg-opacity-40 backdrop-blur`}
    >
      <div className="flex gap-2">
        <LuSparkle className="mt-1 flex-shrink-0" />
        <div>{children}</div>
      </div>
    </div>
  );
};

const Panel = ({ children, props }: BulletPointProps) => {
  return (
    <div
      className={`${props} px-8 py-6 my-4 max-w-[20rem] bg-backwhite z-20 rounded-xl bg-opacity-40 backdrop-blur`}
    >
      <div>{children}</div>
    </div>
  );
};

const GrowablePanel = ({ children, props }: BulletPointProps) => {
  return (
    <div
      className={`${props} px-8 py-6 my-4 bg-backwhite z-20 rounded-xl bg-opacity-40 backdrop-blur`}
    >
      <div>{children}</div>
    </div>
  );
};

export { BulletPoint, Panel, GrowablePanel };
