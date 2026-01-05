// DemoBuggyComponent.tsx
/**
 * A component that simulates an error based on the hasError prop.
 * Use this to test your ErrorBoundary component.
 */

export const DemoBuggyComponent = () => {
  const hasError = true;

  if (hasError) {
    throw new Error("DemoBuggyComponent crashed!");
  }

  return (
    <div>
      {hasError
        ? "I'm a Buggy Component!"
        : "Hello from the Demo Buggy Component!"}
    </div>
  );
};
