import {Layer, Rect, Stage} from "react-konva";
import React, {useEffect, useRef, useState} from "react";


const CanvasBoard = ({img}) => {


    const [annotations, setAnnotations] = useState([]);
    const [newAnnotation, setNewAnnotation] = useState([]);

    const handleMouseDown = event => {
        if (newAnnotation.length === 0) {
            const { x, y } = event.target.getStage().getPointerPosition();
            setNewAnnotation([{ x, y, width: 0, height: 0, key: "0" }]);
        }
    };

    const handleMouseUp = event => {
        if (newAnnotation.length === 1) {
            const sx = newAnnotation[0].x;
            const sy = newAnnotation[0].y;
            const { x, y } = event.target.getStage().getPointerPosition();
            const annotationToAdd = {
                x: sx,
                y: sy,
                width: x - sx,
                height: y - sy,
                key: annotations.length + 1
            };
            annotations.push(annotationToAdd);
            setNewAnnotation([]);
            setAnnotations(annotations);
        }
    };

    const handleMouseMove = event => {
        if (newAnnotation.length === 1) {
            const sx = newAnnotation[0].x;
            const sy = newAnnotation[0].y;
            const { x, y } = event.target.getStage().getPointerPosition();
            setNewAnnotation([
                {
                    x: sx,
                    y: sy,
                    width: x - sx,
                    height: y - sy,
                    key: "0"
                }
            ]);
        }
    };

    const annotationsToDraw = [...annotations, ...newAnnotation];

    const [imgDimensions, setImgDimensions] = useState({height: 0, width: 0})

    const imgRef = useRef(null)

    useEffect(() => {
        setImgDimensions({height: imgRef.current.height , width: imgRef.current.width})
    }, [img])

    return (
        <>
            <div className={'tw-relative an-wrapper'}>
                <img ref={imgRef} draggable={false} style={{zIndex: 0}} className={'tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0'} src={img.image}/>
                <Stage
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    height={imgDimensions.height}
                    width={imgDimensions.width}
                >
                    <Layer>
                        {annotationsToDraw.map(value => {
                            return (
                                <Rect
                                    x={value.x}
                                    y={value.y}
                                    width={value.width}
                                    height={value.height}
                                    fill="transparent"
                                    stroke="black"
                                />
                            );
                        })}
                    </Layer>
                </Stage>
            </div>
        </>
    )
}

export default CanvasBoard