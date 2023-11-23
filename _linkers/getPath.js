function getPath() {
    var { PythonShell } = require('python-shell');
    var path = require('path');

    var options = {
        scriptPath: path.join(__dirname, '../_engine/')
    }

    var directory = new PythonShell('getPath.py', options);

    // Adiciona um ouvinte para o evento "message" do PythonShell
    directory.on("message", function(message) {
        // Atualiza o valor do input "classPath" com o caminho retornado pelo script Python
        document.getElementById("classPath").value = message;

        // Exibe um alerta (opcional)
        swal(message);
    });

    // O evento "close" é acionado quando a execução do script Python é concluída
    directory.on("close", function() {
        console.log("Execução do script Python concluída");
    });
}
