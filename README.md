# Cloud-Native-Python - Chapter 08
Cloud Native Python by Packtpub

Opgelet! 

Twee modules in python-jose-cryptodome werken niet met Python 3.10+<br/>
Er zijn twee patches voorzien om dit op te lossen<br/>
**jose-jwt.patch** en **jose-pws.patch**

```bash
patch -p1 < jose-jwt.patch
patch -p1 < jose-jws.patch
```
