import { useGLTF } from "@react-three/drei";

function Model(props) {
    // const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ruby/model.gltf')
    const { scene } = useGLTF('/models/Wood_Tower.glb')
    return <primitive object={scene} {...props} />
}

export default Model;