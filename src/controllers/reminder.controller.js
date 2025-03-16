import fetch from "node-fetch";
import cron from "node-cron";
import Reminder from "../models/reminder.model"


export const postReminder = async( req, res) => {

    const { Hour, Minute, Token, Day, Month} = req.body;

    if (Hour === undefined || Minute === undefined || !Token) {
        return res.status(400).json({ message: "Hour, Minute y Token son obligatorios" });
    }

    const message = {
        to: Token,
        sound: 'default',
        title: 'Recordatorio',
        body: 'Hora de tomar tus mediciones'
      };
    
    const cronExpression = `${Minute} ${Hour} * * *`;

    const newReminder = new Reminder({  Hour, Minute, Token });
    await newReminder.save();

    cron.schedule(  cronExpression , async ()  => {
     
        try {
            console.log(`Ejecutando cron job a las ${Hour}:${Minute}`)
            const response = await fetch('https://exp.host/--/api/v2/push/send', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Accept-Encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(message),
            });
        
            const result = await response.json();
            res.json(result);
          } catch (error) {
            console.error('Error enviando notificación:', error);
            res.status(500).json({ error: 'Error enviando la notificación' });
          }
    });

    res.json({ message: "Recordatorio programado con éxito", cron: cronExpression });
}


