/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Bulonera.logica;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *
 * @author Alumno
 */
@Entity
public class cabecera_remito implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id_remito;
    @Basic
    private int nro_cliente;
    private int cuit_cliente, nro_remito;
    private String razon_social;

    @Override
    public String toString() {
        return "cabecera_remito{" + "id_remito=" + id_remito + ", nro_cliente=" + nro_cliente + ", cuit_cliente=" + cuit_cliente + ", nro_remito=" + nro_remito + ", razon_social=" + razon_social + '}';
    }
    
    public cabecera_remito(){
    }

    public cabecera_remito(int id_remito, int nro_cliente, int cuit_cliente, int nro_remito, String razon_social) {
        this.id_remito = id_remito;
        this.nro_cliente = nro_cliente;
        this.cuit_cliente = cuit_cliente;
        this.nro_remito = nro_remito;
        this.razon_social = razon_social;
    }

    public int getId_remito() {
        return id_remito;
    }

    public void setId_remito(int id_remito) {
        this.id_remito = id_remito;
    }
    
    public int getNro_cliente() {
        return nro_cliente;
    }

    public void setNro_cliente(int nro_cliente) {
        this.nro_cliente = nro_cliente;
    }

    public int getCuit_cliente() {
        return cuit_cliente;
    }

    public void setCuit_cliente(int cuit_cliente) {
        this.cuit_cliente = cuit_cliente;
    }

    public int getNro_remito(int nro_remito) {
        return nro_remito;
    }

    public void setNro_remito(int nro_remito) {
        this.nro_remito = nro_remito;
    }

    public String getRazon_social() {
        return razon_social;
    }

    public void setRazon_social(String razon_social) {
        this.razon_social = razon_social;
    }
    
    
    
}
