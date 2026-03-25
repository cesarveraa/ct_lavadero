import * as React from "react";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

export const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(({
  id,
  className = "",
  containerClassName = "",
  children,
  ...props
}, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      className={`py-20 md:py-32 ${className}`}
      {...props}
    >
      <div className={`container mx-auto px-6 md:px-12 max-w-7xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
});

SectionWrapper.displayName = "SectionWrapper";
