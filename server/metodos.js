

Meteor.methods({
    formularioAdd: function (data) {
        check(data, Schemas.deslizamineto)

        return Deslizamientos.insert(data)
        console.log(" paso ");
        //  console.log(" data del formulario ", data);
    },
    aumentarVotos(id) {
        console.log(this.userId);
        Deslizamientos.update({ _id: id },
            {
                $set: { fechaReporte: new Date() },
                $inc: { reportes: 1 },
                $addToSet: { contribuidores: this.userId }
            }
        )
    },
    disminuirVotos(id) {
        const desl = Deslizamientos.findOne({ _id: id })

        if (desl.reportes !== 0) {
            Deslizamientos.update({ _id: id }, {
                 $set: { fechaReporte: new Date() },
                 $inc: { reportes: -1 },
                 $addToSet: { contribuidores: this.userId }
                 })
        }

    }

});