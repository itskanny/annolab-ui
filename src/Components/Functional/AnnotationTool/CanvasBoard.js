import {Group, Layer, Rect, Stage, Text} from "react-konva";
import React, {useEffect, useRef, useState} from "react";
import AnnotatorModalForm from "../../Forms/ModelForms/AnnotatorModalForm/AnnotatorModalForm";


const CanvasBoard = ({img, annotations, setAnnotations, newAnnotation, setNewAnnotation}) => {

    const [annotation, setAnnotation] = useState({})

    const handleMouseDown = event => {
        if (newAnnotation.length === 0) {
            const {x, y} = event.target.getStage().getPointerPosition();
            setNewAnnotation([{x, y, width: 0, height: 0, key: "0", id: 0, classification: ''}]);
        }
    };

    const handleMouseUp = event => {
        if (newAnnotation.length === 1) {
            const sx = newAnnotation[0].x;
            const sy = newAnnotation[0].y;
            const {x, y} = event.target.getStage().getPointerPosition();
            const annotationToAdd = {
                x: sx,
                y: sy,
                width: x - sx,
                height: y - sy,
                key: annotations.length + 1
            };
            // annotations.push(annotationToAdd);
            showModal()
            setNewAnnotation([]);
            setAnnotation(annotationToAdd)
            // setAnnotations(annotations);
        }
    };

    const handleMouseMove = event => {
        if (newAnnotation.length === 1) {
            const sx = newAnnotation[0].x;
            const sy = newAnnotation[0].y;
            const {x, y} = event.target.getStage().getPointerPosition();
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
    const [isModalVisible, setIsModalVisible] = useState(false);


    const imgRef = useRef(null)
    const canvasRef = useRef(null)


    const imageLoaded = (data) => {
        setImgDimensions({height: data.target.naturalHeight, width: data.target.naturalWidth})
    }


    const showModal = () => {
        setIsModalVisible(true);
    };

    useEffect(() => {
        setAnnotations([])
        setNewAnnotation([])
    }, [img])


    return (
        <>
            <AnnotatorModalForm setAnnotations={setAnnotations} annotations={annotations} annotation={annotation}
                                isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} img={img}/>
            <div className={'tw-relative'}>
                <img ref={imgRef} onLoad={imageLoaded} draggable={false} style={{zIndex: 0}}
                     className={'tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0'} src={img.image}
                     alt={'to be annotated'}/>
                <Stage
                    ref={canvasRef}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    height={imgDimensions.height}
                    width={imgDimensions.width}
                >
                    <Layer>
                        {annotationsToDraw.map(value => {
                            return (
                                <Group

                                    key={`annotatedRect-${value.x}${Math.random()}${Math.random()}`}
                                >
                                    {
                                        value.visible ?
                                            <>

                                                <Text text={value.classification} height={8} x={value.x + 2}
                                                      y={value.y - 12}/>
                                                <Rect
                                                    x={value.x}
                                                    y={value.y}
                                                    width={value.width}
                                                    height={value.height}
                                                    key={`annotatedRect-${value.x}${Math.random()}${Math.random()}`}
                                                    fill="transparent"
                                                    stroke="black"
                                                />
                                            </>
                                            :
                                            <></>
                                    }

                                </Group>

                            );
                        })}
                    </Layer>
                </Stage>
            </div>
        </>
    )
}

export default CanvasBoard