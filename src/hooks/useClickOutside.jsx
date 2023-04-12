import React, { useEffect } from 'react';

const useClickOutside = (refComponent, func) => {
	useEffect(() => {
		const clickOutsideHandeler = (e) => {
			const target = e.target;
			if(refComponent.current && !refComponent.current.contains(target)){
				func();
			}
		}

		document.addEventListener("mousedown", clickOutsideHandeler);

		return () => document.removeEventListener("mousedown", clickOutsideHandeler);
	}, []);
}

export default useClickOutside;