//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.4-2 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2016.03.24 at 10:26:12 AM BRT 
//


package br.com.ttrans.samapp.ws.bo.alarm;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;extension base="{http://samapp.ttrans.com.br/services/AlarmServices/xsd}AlarmBase">
 *       &lt;sequence>
 *         &lt;element name="severity" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="textMessageId" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="textMessageParams" type="{http://samapp.ttrans.com.br/services/AlarmServices/xsd}MessageParams" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "severity",
    "textMessageId",
    "textMessageParams"
})
@XmlRootElement(name = "AlarmRefresh")
public class AlarmRefresh
    extends AlarmBase
{

    protected Integer severity;
    protected String textMessageId;
    protected List<MessageParams> textMessageParams;

    /**
     * Gets the value of the severity property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getSeverity() {
        return severity;
    }

    /**
     * Sets the value of the severity property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setSeverity(Integer value) {
        this.severity = value;
    }

    /**
     * Gets the value of the textMessageId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTextMessageId() {
        return textMessageId;
    }

    /**
     * Sets the value of the textMessageId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTextMessageId(String value) {
        this.textMessageId = value;
    }

    /**
     * Gets the value of the textMessageParams property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the textMessageParams property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getTextMessageParams().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link MessageParams }
     * 
     * 
     */
    public List<MessageParams> getTextMessageParams() {
        if (textMessageParams == null) {
            textMessageParams = new ArrayList<MessageParams>();
        }
        return this.textMessageParams;
    }

}
