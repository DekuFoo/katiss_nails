// Создадим главный компонент приложения
function App() {
    // Состояние для отслеживания текущего режима (LITE, MEDIUM, HARD)
    const [currentMode, setCurrentMode] = React.useState(null);

    // Состояние для хранения фотографий
    const [photos, setPhotos] = React.useState([]);

    // Функция для обновления фотографий в зависимости от режима
    React.useEffect(() => {
        // Ваш код для получения фотографий в зависимости от режима
        // Здесь вы можете использовать AJAX-запросы или импорт изображений
        switch (currentMode) {
            case 'LITE':
                setPhotos([
                    { url: 'lite_photo1.jpg', alt: 'Lite Photo 1' },
                    { url: 'lite_photo2.jpg', alt: 'Lite Photo 2' },
                    // Добавьте свои фотографии для LITE
                ]);
                break;
            case 'MEDIUM':
                setPhotos([
                    { url: 'medium_photo1.jpg', alt: 'Medium Photo 1' },
                    { url: 'medium_photo2.jpg', alt: 'Medium Photo 2' },
                    // Добавьте свои фотографии для MEDIUM
                ]);
                break;
            case 'HARD':
                setPhotos([
                    { url: 'hard_photo1.jpg', alt: 'Hard Photo 1' },
                    { url: 'hard_photo2.jpg', alt: 'Hard Photo 2' },
                    // Добавьте свои фотографии для HARD
                ]);
                break;
            default:
                setPhotos([]); // Очищаем фотографии, если режим не установлен
        }
    }, [currentMode]);

    // Функция для обработки смены режима
    const handleModeChange = (mode) => {
        setCurrentMode(mode);
    };

    return (
        <div>
            <h1>Ваше портфолио</h1>
            <div className="photo-gallery">
                {photos.map((photo, index) => (
                    <PhotoCard key={index} photo={photo} />
                ))}
            </div>
            <div className="admin-panel">
                <button onClick={() => handleModeChange('LITE')}>LITE</button>
                <button onClick={() => handleModeChange('MEDIUM')}>MEDIUM</button>
                <button onClick={() => handleModeChange('HARD')}>HARD</button>
            </div>
            <div id="photoList" className="photo-list">
                {/* Контейнер для отображения фотографий */}
            </div>
        </div>
    );
}
