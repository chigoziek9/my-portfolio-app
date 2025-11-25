

type LineWithCircleProps = {
  /** total height of the component (css units) */
  height?: string; // e.g. "200px" or "h-48" (if using tailwind class, pass undefined and use className)
  /** diameter of the circle in px */
  circleSize?: number;
  /** thickness of the vertical line in px */
  lineThickness?: number;
  /** color for circle and line (valid CSS color) */
  color?: string;
  /** extra tailwind classes applied to root wrapper */
  className?: string;
  /** if true, the circle sits at the top of the line; "center" places it centered */
  position?: "top" | "center" | "bottom";
};

/**
 * LineWithCircle
 *
 * A small, flexible React + TypeScript component that renders a vertical line
 * joined with a circle. Uses Tailwind for layout and inline styles for colors & sizes.
 *
 * Example usage:
 * <LineWithCircle height="200px" circleSize={20} lineThickness={4} color="#06b6d4" />
 */
export const LineWithCircle: React.FC<LineWithCircleProps> = ({
  height = "500px",
  circleSize = 60,
  lineThickness = 4,
  color = "#3b82f6",
  className = "",

}) => {
  // compute dynamic styles
  const circleStyle: React.CSSProperties = {
    width: `${circleSize}px`,
    height: `${circleSize}px`,
    borderRadius: "50%",
    background: color,
    display: "block",
  };

  const lineStyle: React.CSSProperties = {
    width: `${lineThickness}px`,
    background: color,
    flex: "1 1 auto",
  };

  // The container uses flex column to stack: top-line -> circle -> bottom-line

  // Which segment gets the extra space depends on `position`
 
  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      // allow the user to style height via className or via the style prop below
      style={{ height }}
      aria-hidden={false}
      role="img"
      aria-label="Vertical line connected to a circle"
    >
      <div className="flex flex-col items-center h-full">
        {/* top segment of the line */}
        <div
          style={{
            ...lineStyle,
            height: "20px", // <-- top line becomes short
            flex: "0 0 auto",
          }}
          className="transition-all"
        />

        {/* circle */}
        <div
          className="flex items-center justify-center"
          style={{ margin: "6px 0" }}
        >
          <span
            style={{
              ...circleStyle,
              overflow: "hidden", // makes the image stay inside the circle
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="shadow-sm ring-2 ring-white/40 dark:ring-black/20"
            aria-hidden
          >
            <img src={"/work.png"} alt="" className="p-3" />
          </span>
        </div>

        {/* bottom segment of the line */}
        <div
          style={{
            ...lineStyle,
            height: "210px", // <-- top line becomes short
            flex: "0 0 auto",
          }}
          className="transition-all"
        />

        {/* circle */}
        <div
          className="flex items-center justify-center"
          style={{ margin: "6px 0" }}
        >
          <span
            style={{
              ...circleStyle,
              overflow: "hidden", // makes the image stay inside the circle
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="shadow-sm ring-2 ring-white/40 dark:ring-black/20"
            aria-hidden
          >
            <img src={"/degree.png"} alt="" className="p-2" />
          </span>
        </div>
        <div
          style={{
            ...lineStyle,
            height: "210px", // <-- top line becomes short
            flex: "0 0 auto",
          }}
          className="transition-all"
        />
      </div>
    </div>
  );
};

export default LineWithCircle;

/*
Demo / usage notes (not part of the component):

1) Simple center-aligned 200px tall line with a 20px circle:

   <LineWithCircle height="200px" circleSize={20} color="#06b6d4" />

2) Using Tailwind classes to control height instead of the `height` prop:
   <div className="h-48 flex items-center">
     <LineWithCircle circleSize={16} lineThickness={3} color="#ef4444" />
   </div>

3) Place circle at the top:
   <LineWithCircle position="top" height="160px" />

4) Add animation (pulse or bounce) via Tailwind utilities on the circle by wrapping
   the component and targeting the inner span with a custom class, or by adding
   animation classes to the `span` inside the component.
*/
