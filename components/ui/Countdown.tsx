import { Text } from "react-native";
import React, { useEffect, useState } from "react";
import { CountdownProps } from "@/types/CountdownProps";

const Countdown: React.FC<CountdownProps> = ({
	initialCount,
	onCountdownComplete,
}) => {
	const [count, setCount] = useState(initialCount);
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		let interval: NodeJS.Timeout | null = null;

		if (isActive && count > 0) {
			interval = setInterval(() => {
				setCount((prev) => prev - 1);
			}, 1000);
		} else if (count === 0) {
			setIsActive(false);
			onCountdownComplete();
		}

		return () => {
			if (interval) clearInterval(interval);
		};
	}, [count, isActive, onCountdownComplete]);

	return <Text className="text-2xl font-bold text-center">{count}</Text>;
};

export default Countdown;
