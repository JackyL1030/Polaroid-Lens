import "../styles/ViewFinder.css";

export default function ViewFinder({ loading }) {
  return (
    <div className="viewfinder">
      <div className="viewfinder-label">VIEW FINDER</div>
      <div className="screen">{loading ? "SEARCHING..." : "READY"}</div>
    </div>
  );
}
