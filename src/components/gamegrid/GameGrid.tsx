import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

type ChessboardProps = {
    cells: number;
};

const Chessboard: React.FC<ChessboardProps> = ({ cells }) => {
    const renderBoard = () => {
        const rows = [];
        for (let i = 0; i < cells; i++) {
            const cellsArr = [];
            for (let j = 0; j < cells; j++) {
                // const isWhite = (i + j) % 2 === 0;
                cellsArr.push(
                    <div
                        key={`cell-${i}-${j}`}
                        className={cx('mt-2 ml-2 h-14 w-14', {
                            // 'bg-white': isWhite,
                            ' bg-slate-400': true,
                        })}
                    />,
                );
            }
            rows.push(
                <div key={`row-${i}`} className="flex">
                    {cellsArr}
                </div>,
            );
        }
        return rows;
    };

    return <div className="flex flex-col">{renderBoard()}</div>;
};

Chessboard.propTypes = {
    cells: PropTypes.number.isRequired,
};

export default Chessboard;

// import React, { useRef, useState } from 'react';

// type GridProps = {
//     width: number;
//     height: number;
// };

// type PieceProps = {
//     x: number;
//     y: number;
//     color: string;
// };

// const Grid: React.FC<GridProps> = ({ width, height }) => {
//     const [pieces, setPieces] = useState<PieceProps[]>([]);
//     const gridRef = useRef<HTMLDivElement>(null);

//     const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//         if (!gridRef.current) return;
//         const gridRect = gridRef.current.getBoundingClientRect();
//         const x = e.clientX - gridRect.left;
//         const y = e.clientY - gridRect.top;
//         setPieces((prevPieces) => [...prevPieces, { x, y, color: 'black' }]);
//     };

//     const handlePieceMove = (
//         e: React.MouseEvent<HTMLDivElement, MouseEvent>,
//         index: number,
//     ) => {
//         if (!gridRef.current) return;
//         const gridRect = gridRef.current.getBoundingClientRect();
//         const x = e.clientX - gridRect.left;
//         const y = e.clientY - gridRect.top;
//         setPieces((prevPieces) =>
//             prevPieces.map((piece, i) => {
//                 if (i !== index) return piece;
//                 return { ...piece, x, y };
//             }),
//         );
//     };

//     return (
//         <div
//             ref={gridRef}
//             style={{ width, height, border: '1px solid black' }}
//             onClick={handleClick}>
//             {pieces.map((piece, index) => (
//                 <div
//                     key={index}
//                     style={{
//                         position: 'absolute',
//                         left: piece.x,
//                         top: piece.y,
//                         width: 50,
//                         height: 50,
//                         backgroundColor: piece.color,
//                         borderRadius: '50%',
//                     }}
//                     onMouseDown={(e) => handlePieceMove(e, index)}
//                 />
//             ))}
//         </div>
//     );
// };

// type MapProps = {
//     width: number;
//     height: number;
// };

// const Map: React.FC<MapProps> = ({ width, height }) => {
//     const [layers, setLayers] = useState<number>(1);

//     const handleAddLayer = () => {
//         setLayers((prevLayers) => prevLayers + 1);
//     };

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//             {Array.from({ length: layers }).map((_, i) => (
//                 <Grid key={i} width={width} height={height} />
//             ))}
//             <button onClick={handleAddLayer}>Add Layer</button>
//         </div>
//     );
// };

// export default Map;
