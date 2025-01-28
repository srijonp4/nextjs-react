import Link from 'next/link';

type Props = {
  label: string;
  href: string;
  close?: (open: boolean) => void;
};

const Navlink = (props: Props) => {
  return (
    <button
      className="btn w-full "
      onClick={() => {
        if (props.close) {
          props.close(false);
        }
      }}
    >
      <Link href={props.href}>{props.label}</Link>
    </button>
  );
};

export default Navlink;
