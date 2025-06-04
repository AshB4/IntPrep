import React from "react";

export default function BetterCard({ children }) {
    return (
			<div className="card-wrapper">
				<div className="card" aria-label="Card">
					<div className="card-content">{children}</div>
				</div>
			</div>
		);
}