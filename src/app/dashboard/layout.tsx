const DahboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className='dashboard__container'>{children}</div>;
};

export default DahboardLayout;
