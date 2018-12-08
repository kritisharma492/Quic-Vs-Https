from flask import Flask, render_template
import ssl
# ctx = ssl.SSLContext(ssl.PROTOCOL_SSLv23)
# ctx.load_cert_chain('server.crt', 'server.key')
 
app = Flask(__name__)
 
# '/results/<path:file>'
@app.route('/')
#@app.route('/results/<path:file>', defaults={'file': 'index.html'})
# def render_static(page_name):
def render_static():
    #return render_template('%s.html' % page_name)
    return render_template('index.html')
 
if __name__ == '__main__':
    # app.run()
    # app.run(ssl_context=('server.crt', 'server.key'))
    app.run(host='127.0.0.1',port='5000', 
        debug = False, ssl_context=('server.crt', 'server.key'))
