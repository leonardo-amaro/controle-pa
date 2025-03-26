const Formulario = () => {
    return (
        <form>
            <label htmlFor="data">Data:</label>
            <input type="date" name="data" id="data" />
            <label htmlFor="periodo-dia">Período:</label>
            <select name="periodo-dia" id="periodo-dia">
                <option value="" selected>Selecione...</option>
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
            </select>
            <label htmlFor="p-sistole">Pressão sistólica:</label>
            <input type="number" name="p-sistole" id="p-sistole" />
            <label htmlFor="p-diastole">Pressão diastólica:</label>
            <input type="number" name="p-diastole" id="p-diastole" />
            <button>Registrar</button>
        </form>
    )
}

export default Formulario