import * as React from 'react'
import { createUseStyles } from 'react-jss'
import Player from './Player'

const useStyles = createUseStyles({
    player: {
        width: '100%',
        height: '100%',
        maxWidth: '720px',
        maxHeight: '360px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    controls: {
        width: '100%',
        maxWidth: '720px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex'
    },
    input: {
        flexGrow: '1'
    },
    frame: {
        flexGrow: '1',
        width: '100%',
        maxWidth: '720px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    parent: {
        display: 'flex',
        flexDirection: 'column'
    }
})


export const App = () => {
    const inputRef = React.useRef(null)
    const styles = useStyles()
    const [tempUrl, setTempUrl] = React.useState('https://cph-msl.akamaized.net/hls/live/2000341/test/master.m3u8')
    const [url, setUrl] = React.useState(tempUrl)

    const handleGo = () => {
        if (inputRef.current) {
            setUrl(tempUrl)
        }
    }
    return <div className={styles.parent}>
        <div className={styles.controls}>
            <input className={styles.input} onChange={(e) => setTempUrl(e.target.value)} ref={inputRef} type="text" value={tempUrl}></input>
            <button onClick={handleGo}>go</button>
        </div>
        <Player className={styles.player} source={url} />
        <iframe className={styles.frame} src="https://test.liveinterpreter.app" sandbox="allow-scripts allow-same-origin" frameborder="0" width="1280" height="720"></iframe>
    </div>
}

export default App