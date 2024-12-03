const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <div className="bg-blue-500 text-black text-center">
        Feature Product Section 🚀
      </div>{" "}
      {/* It can be a carousel of feature product */}
    </div>
  );
};

export default Layout;
