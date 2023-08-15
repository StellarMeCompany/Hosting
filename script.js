const songs = [
  'CafeMalibú_Sech.mp3',
  'Holanda_Jhayco.mp3',
  'LosRompediskoteca_Jhayco.mp3',
  'TILFURTHERNOTICE_TravisScott.mp3',
  'VOLVER_Tainy.mp3',
  // ...agrega aquí el resto de nombres de archivos de música
]

const playButton = document.getElementById('playButton')
const prevButton = document.getElementById('prevButton')
const nextButton = document.getElementById('nextButton')
const audioPlayer = document.getElementById('audioPlayer')
const songTitle = document.getElementById('songTitle')
const artistName = document.getElementById('artistName')
const volumeIcon = document.getElementById('volume-icon')
let isMuted = false
let previousVolume = 1
let isPlaying = false
let currentSongIndex = 0
let savedTime = 0
let firstPlay = true // Bandera para la primera reproducción

function extractWords(fileName) {
  const words = fileName.replace('.mp3', '').split('_')
  return words.length > 1 ? words : [words[0], 'Unknown Artist']
}

function playCurrentSong() {
  const currentSong = songs[currentSongIndex]
  const [title, artist] = extractWords(currentSong)
  audioPlayer.src = `songs/${currentSong}`
  audioPlayer.currentTime = savedTime
  audioPlayer.play()
  isPlaying = true
  playButton.innerHTML = '<i class="fas fa-pause"></i>'
  songTitle.textContent = title
  artistName.textContent = artist
}

function pauseSong() {
  audioPlayer.pause()
  savedTime = audioPlayer.currentTime
  isPlaying = false
  playButton.innerHTML = '<i class="fas fa-play"></i>'
}

function getRandomIndex() {
  let randomIndex = Math.floor(Math.random() * songs.length)
  while (randomIndex === currentSongIndex) {
    randomIndex = Math.floor(Math.random() * songs.length)
  }
  return randomIndex
}

function playRandomSong() {
  currentSongIndex = getRandomIndex()
  playCurrentSong()
}

playButton.addEventListener('click', () => {
  if (isPlaying) {
    pauseSong()
  } else {
    if (firstPlay) {
      firstPlay = false
      playRandomSong() // Reproduce una canción aleatoria en la primera reproducción
    } else {
      playCurrentSong()
    }
  }
})

volumeIcon.addEventListener('click', () => {
  if (!isMuted) {
    volumeIcon.innerHTML = '<i class="fas fa-volume-mute"></i>'
    audioPlayer.volume = 0
  } else {
    volumeIcon.innerHTML = '<i class="fas fa-volume-up"></i>'
    audioPlayer.volume = 0.1
  }

  isMuted = !isMuted
})

audioPlayer.volume = 0.1 // Configurar el volumen inicial

nextButton.addEventListener('click', () => {
  currentSongIndex = getRandomIndex()
  savedTime = 0 // Reiniciar el tiempo al cambiar de canción
  playCurrentSong()
})

prevButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length
  savedTime = 0 // Reiniciar el tiempo al cambiar de canción
  playCurrentSong()
})

audioPlayer.addEventListener('ended', () => {
  playRandomSong()
})
