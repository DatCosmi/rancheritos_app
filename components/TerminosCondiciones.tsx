import React from "react";
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from "react-native";

interface TerminosCondicionesProps {
    onAccept: () => void;
    onReject: () => void;
}

const TerminosCondiciones: React.FC<TerminosCondicionesProps> = ({
    onAccept,
    onReject,
}) => {
    return (
        <ScrollView>
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <ScrollView contentContainerStyle={styles.scrollContent}>
                        <Text style={styles.title}>
                            Política de Privacidad de Rancheritos Tech
                        </Text>
                        <Text style={styles.text}>
                            En Rancheritos Tech, estamos comprometidos con la protección de
                            los datos personales de nuestros usuarios y clientes. Esta
                            política de privacidad explica cómo recopilamos, utilizamos,
                            compartimos y protegemos tu información, de acuerdo con el
                            Reglamento General de Protección de Datos (GDPR).
                        </Text>

                        <Text style={styles.subtitle}>1. Información General</Text>
                        <Text style={styles.text}>
                            La aplicación móvil de Rancheritos Tech tiene un propósito
                            exclusivamente publicitario e informativo. A través de esta
                            aplicación, presentamos nuestros servicios y casos de éxito
                            relacionados con el desarrollo de software. No realizamos
                            transacciones comerciales a través de la app ni recopilamos datos
                            personales sensibles sin el consentimiento expreso de los usuarios.
                        </Text>

                        <Text style={styles.subtitle}>2. Condiciones de Uso</Text>
                        <Text style={styles.text}>
                            <Text style={styles.bold}>Responsable del Tratamiento de Datos:</Text> La empresa responsable del
                            tratamiento de tus datos personales es Rancheritos Tech.
                            {"\n"}Dirección: [N/A]
                            {"\n"}Correo
                            electrónico: [rancheritostech@gmail.com]
                            {"\n"}Teléfono: [6182454180]
                        </Text>
                        <Text style={styles.text}>
                            <Text style={styles.bold}>Principios Clave:</Text> Nos regimos por los siguientes principios clave
                            para garantizar el cumplimiento con el GDPR:
                            {"\n"}• Legalidad, lealtad y transparencia: Los datos personales se tratan de manera legal y
                            transparente.
                            {"\n"}• Limitación de la finalidad: Los datos se recopilan solo para finalidades específicas,
                            explícitas y legítimas.
                            {"\n"}• Minimización de datos: Solo recopilamos los datos personales que son necesarios para
                            cumplir con las finalidades de la aplicación.
                            {"\n"}• Exactitud: Mantenemos los datos personales exactos y actualizados.
                            {"\n"}• Limitación del almacenamiento: Conservamos los datos solo durante el tiempo necesario
                            para cumplir con las finalidades de la app.
                            {"\n"}• Integridad y confidencialidad: Aplicamos medidas técnicas y organizativas apropiadas
                            para garantizar la seguridad de los datos personales.
                        </Text>

                        <Text style={styles.subtitle}>3. Datos que Recopilamos</Text>
                        <Text style={styles.text}>
                            Nuestra aplicación no recopila ni trata información personal sensible. Sin embargo, los
                            usuarios pueden proporcionarnos voluntariamente datos como nombre o correo electrónico
                            cuando interactúan con nosotros a través de formularios de contacto o para hacer
                            sugerencias o comentarios. Estos datos se recopilan bajo el principio de minimización y
                            solo se utilizarán para responder a las solicitudes del usuario.
                        </Text>

                        <Text style={styles.subtitle}>4. Derechos de los Usuarios bajo el GDPR</Text>
                        <Text style={styles.text}>
                            Los usuarios de nuestra aplicación tienen los siguientes derechos en relación con sus datos
                            personales:
                            {"\n"}• Acceso a los datos: Derecho a solicitar acceso a sus datos personales que hayan sido
                            recopilados.
                            {"\n"}• Rectificación: Derecho a corregir datos personales inexactos o incompletos.
                            {"\n"}• Supresión (Derecho al olvido): Derecho a solicitar la eliminación de sus datos
                            personales cuando ya no sean necesarios para las finalidades originales.
                            {"\n"}• Limitación del tratamiento: Derecho a solicitar que se limite el tratamiento de sus
                            datos personales en determinadas circunstancias.
                            {"\n"}• Portabilidad de datos: Derecho a recibir los datos personales proporcionados en un
                            formato estructurado y a transferirlos a otro controlador.
                            {"\n"}• Oposición al tratamiento: Derecho a oponerse al tratamiento de sus datos personales
                            por motivos relacionados con su situación particular.
                            {"\n"}Para ejercer cualquiera de estos derechos, los usuarios pueden ponerse en contacto con
                            Rancheritos Tech a través del correo electrónico [rancheritostech@gmail.com].
                        </Text>

                        <Text style={styles.subtitle}>5. Conservación de Datos</Text>
                        <Text style={styles.text}>
                            Los datos personales proporcionados a través de la app solo se conservarán durante el tiempo
                            necesario para cumplir con las finalidades para las que fueron recopilados. Una vez cumplidas
                            dichas finalidades, los datos se eliminarán de forma segura, a menos que sea necesario
                            mantenerlos por motivos legales o regulatorios.
                        </Text>

                        <Text style={styles.subtitle}>6. Transferencia Internacional de Datos</Text>
                        <Text style={styles.text}>
                            Rancheritos Tech no transferirá datos personales fuera del Espacio Económico Europeo (EEE) a
                            menos que existan garantías adecuadas de que los datos serán tratados con el mismo nivel de
                            protección que exige el GDPR. En el caso de que se requiera dicha transferencia, se informará
                            al usuario y se obtendrá su consentimiento expreso.
                        </Text>

                        <Text style={styles.subtitle}>7. Seguridad de los Datos</Text>
                        <Text style={styles.text}>
                            Implementamos medidas técnicas y organizativas adecuadas para proteger los datos personales
                            contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Sin embargo,
                            aunque nos esforzamos por garantizar la seguridad de los datos, no podemos garantizar la
                            seguridad total de la información transmitida a través de internet.
                        </Text>

                        <Text style={styles.subtitle}>8. Actualizaciones de la Política de Privacidad</Text>
                        <Text style={styles.text}>
                            Podemos actualizar esta política de privacidad para reflejar cambios en nuestras prácticas de
                            tratamiento de datos o en las leyes aplicables. Te notificaremos cualquier cambio significativo
                            publicando la nueva política en esta página, y te recomendamos que revises regularmente esta
                            política para estar informado.
                        </Text>

                        <Text style={styles.subtitle}>9. Actualizaciones y Cambios en los Términos</Text>
                        <Text style={styles.text}>
                            Rancheritos Tech se reserva el derecho de modificar estos Términos y Condiciones en cualquier
                            momento. Los cambios se reflejarán en esta página y se notificará a los usuarios en caso de
                            actualizaciones significativas.
                        </Text>

                        <Text style={styles.subtitle}>10. Privacidad</Text>
                        <Text style={styles.text}>
                            No recopilamos datos personales sensibles a través de la app. Cualquier información
                            proporcionada por los usuarios, como comentarios o sugerencias, será utilizada únicamente para
                            mejorar la experiencia en la app y no será compartida con terceros sin consentimiento.
                        </Text>

                        <Text style={styles.subtitle}>11. Contacto</Text>
                        <Text style={styles.text}>
                            Si tiene preguntas o inquietudes sobre estos Términos y Condiciones, puede contactarnos a
                            través de [rancheritostech@gmail.com].
                        </Text>
                    </ScrollView>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.rejectButton} onPress={onReject}>
                            <Text style={styles.buttonText}>Rechazar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.acceptButton} onPress={onAccept}>
                            <Text style={styles.buttonText}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.8)",
        justifyContent: "center",
        padding: 20,
    },
    modalContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 15,
    },
    text: {
        fontSize: 16,
        marginVertical: 5,
        lineHeight: 24,
    },
    bold: {
        fontWeight: "bold",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
    },
    rejectButton: {
        backgroundColor: "#f44336",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        elevation: 2,
    },
    acceptButton: {
        backgroundColor: "#4CAF50",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        elevation: 2,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default TerminosCondiciones;
