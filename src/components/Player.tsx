import * as React from 'react'
import Hls from 'hls.js'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    player: {
        width: "100%"
    }
})

export const Player = ({ source, className }) => {

    const playerRef = React.useRef(null)
    const styles = useStyles()

    React.useEffect(() => {

        if (playerRef.current && Hls.isSupported()) {

            console.log(playerRef.current)

            var hls = new Hls({ debug: true });
            hls.loadSource(source)
            hls.attachMedia(playerRef.current)

        }



    }, [source, playerRef])

    return <div className={className}>
        <video muted autoPlay className={styles.player} controls ref={playerRef}>
        {/* <source src={source}></source> */}
    </video>
        </div>
}

export default Player