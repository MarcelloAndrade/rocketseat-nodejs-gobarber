// npx sequelize migration:create --name create-appointments

module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    date: DataTypes.DATE
  })

  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { foreninKey: 'user_id' })
    Appointment.belongsTo(models.User, { foreninKey: 'provider_id' })
  }

  return Appointment
}
